import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
// import { cn } from "../libs/utils";
interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value: number;
  className: string;
}

const Progress = React.forwardRef(
  ({ className, value, ...props }: ProgressProps, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      // className={cn(
      //   "relative h-4 w-full overflow-hidden rounded-full bg-[#bac1cb]",
      //   className
      // )}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-[#230e82] transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
