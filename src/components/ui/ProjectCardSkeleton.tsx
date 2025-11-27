
import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
    return (
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl relative overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
            {/* Image Placeholder */}
            <div className="h-52 w-full relative">
                <Skeleton className="h-full w-full" />
            </div>

            {/* Content Placeholder */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <Skeleton className="h-8 w-3/4 mb-3" />

                {/* Duration Badge */}
                <Skeleton className="h-6 w-24 rounded-full mb-3" />

                {/* Description */}
                <div className="space-y-2 mb-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Button */}
                <Skeleton className="h-10 w-full rounded-lg mb-4" />

                {/* Tools */}
                <div className="mt-auto">
                    <Skeleton className="h-5 w-24 mb-2" />
                    <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-6 w-14 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};
