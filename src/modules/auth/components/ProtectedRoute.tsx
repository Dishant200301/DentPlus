import { Navigate, useLocation } from 'react-router-dom';
import { useWebAuth } from '../context/WebAuthContext';
import { Loader2 } from 'lucide-react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, loading } = useWebAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!user) {
        // Redirect to login but keep the location they were trying to go to
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
