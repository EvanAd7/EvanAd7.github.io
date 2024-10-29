import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white mt-12 border-t">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        <Link 
                            href="https://github.com/evanad7/evanad7.github.io" 
                            target="_blank"
                            className="underline underline-offset-2 hover:text-gray-900 transition-colors"
                        >
                            Made from scratch
                        </Link>
                        {" "}using Next.js and Tailwind CSS
                    </p>
                    <div className="flex items-center gap-6">
                        <Link 
                            href="https://github.com/evanad7" 
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-110"
                        >
                            <Image 
                                src="/images/github.svg" 
                                alt="GitHub"
                                width={28}
                                height={28}
                            />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/evan-adami-16b98a290"
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-110 duration-200"
                        >
                            <Image 
                                src="/images/linkedin.svg" 
                                alt="LinkedIn"
                                width={28}
                                height={28}
                            />
                        </Link>
                        <Link 
                            href="https://drive.google.com/file/d/183AD_8qBUmHji0MZ0Y0nwFDE3mVoJZxX/view?usp=sharing" 
                            target="_blank"
                            className="text-gray-600 hover:text-gray-900 transition-colors text-sm group flex items-center gap-1"
                        >
                            <span className="group-hover:underline underline-offset-2">My resume</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
