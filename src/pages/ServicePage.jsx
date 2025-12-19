import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ServicePage = () => {

    return (
        <MainLayout>
            <div className="pt-20 px-4 min-h-[60vh] flex items-center justify-center">
                <div className="text-center max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">Service Detail Page</h1>
                    <p className="text-gray-600 mb-8">This page is under construction. It will contain detailed information about the service.</p>
                    <Link to="/">
                        <Button variant="secondary">
                            <ArrowLeft className="inline-block mr-2" size={16} />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}

export default ServicePage;
