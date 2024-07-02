import React, { ReactNode } from 'react';

interface IDropdownProps {
  children: ReactNode;
}

interface IDropdownTriggerProps {
  as: ReactNode;
}

interface IDropdownMenuProps {
  children: ReactNode;
}

interface IDropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Dropdwon = ({ children }: IDropdownProps) => {
  return <div>{children}</div>;
};

const DropdwonTrigger = ({ as }: IDropdownTriggerProps) => {
  return <div>{as}</div>;
};

const DropdwonMenu = ({ children }: IDropdownMenuProps) => {
  return <ul>{children}</ul>;
};

const DropdwonItem = ({ children, onClick }: IDropdownItemProps) => {
  return <li onClick={onClick}>{children}</li>;
};

Dropdwon.Menu = DropdwonMenu;
Dropdwon.Item = DropdwonItem;
Dropdwon.Trigger = DropdwonTrigger;
