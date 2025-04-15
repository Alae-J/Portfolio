export interface BurgerMenuProps {
    onClick: (event: React.MouseEvent<HTMLDivElement> | HTMLButtonElement) => void
}

export interface BurgerWrapperProps {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    $isOpen?: boolean;
}
