
import React from 'react';
import { Check } from 'lucide-react';

interface DescriptionProps {
    heading?: string;
    description: string;
    longDescription?: string[];
    features?: string[];
}

const Description = ({ heading = "Description", description, longDescription, features }: DescriptionProps) => {
    return (
        <section className="mb-[50px]">
            <h2 className="font-playfair text-[32px] text-[#1E293B] mb-6">{heading}</h2>

            <div className="text-lg leading-relaxed text-slate-600 space-y-4">
                {longDescription && longDescription.length > 0 ? (
                    longDescription.map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))
                ) : (
                    <p>{description}</p>
                )}
            </div>

            {features && features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                    {features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-[15px] font-medium text-slate-700">
                            <Check size={18} className="text-green-500 shrink-0" />
                            {feat}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Description;
