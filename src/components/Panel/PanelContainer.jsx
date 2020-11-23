import React, { useCallback, useEffect, useState } from 'react';

const countOpened = (openPanels) =>
  Object.values(openPanels).reduce((acc, val) => acc += val ? 1 : 0, 0);

function PanelContainer({ children, maxOpened, className }) {
  const [openPanels, setOpenPanels] = useState({});

  useEffect(() => {
    const initialOpened = {};
    for (const child of React.Children.toArray(children)) {
      if (child.props.opened) {
        initialOpened[child.props.id] = true;
      }
      if (maxOpened && maxOpened === Object.keys(initialOpened).length) {
        break;
      }
    }
    setOpenPanels(initialOpened);
  }, [children, maxOpened]);

  const onClick = useCallback(
    (id) => {
      setOpenPanels(prevstate => {
        const isOpen = !!prevstate[id];
        const newState = {
          ...prevstate,
          [id]: !isOpen,
        };

        const opened = countOpened(newState);
        if (!maxOpened || opened <= maxOpened) {
          return newState;
        }
        return prevstate;
      });
    },
    [maxOpened],
  );

  return (
    <div className={className}>
      {React.Children.map(children, child => <child.type
        {...child.props}
        key={child.props.id}
        open={!!openPanels[child.props.id]}
        onClick={onClick}
      />)}
    </div>
  );
}

export default PanelContainer;
