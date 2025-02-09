import clsx from "clsx";

type Props = React.ComponentPropsWithoutRef<'button'> & {
    children: React.ReactNode;
}

export default function PrimaryButton({ children, className, ...restProps }: Props) {
    return (
        <button
            className={clsx("cursor-pointer w-full py-2 px-8 text-lg font-medium text-black hover:text-white bg-violet-500 hover:bg-violet-600 transition duration-200 rounded-full", className)}
            {...restProps}
        >
            {children}
        </button>
    )
}
