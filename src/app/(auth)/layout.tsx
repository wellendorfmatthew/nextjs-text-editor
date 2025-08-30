interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-tertiary">
            {children}
        </div>
    )
}