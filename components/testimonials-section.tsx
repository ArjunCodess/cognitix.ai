import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  return (
    <figure className="mx-auto flex w-full max-w-lg flex-col items-center justify-center">
      <div className="mb-8 flex items-center gap-1">
        <VercelIcon aria-hidden="true" className="size-6" />
        <span className="font-medium text-lg">Vercel</span>
      </div>

      <blockquote className="text-center text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl">
        &quot;
        <span className="font-medium">
          Oh my god, Cognitix.AI is the best. It helped our company integrate AI
          in just a matter of a few months and that was it! Voila!
        </span>
        &quot;
      </blockquote>

      <div className="mask-[linear-gradient(to_right,transparent,black,transparent)] mx-auto my-5 h-px w-full max-w-sm bg-border" />

      <figcaption className="flex flex-col items-center gap-5">
        <div className="space-y-0.5 text-center">
          <cite className="font-medium text-foreground text-xl not-italic">
            Guillermo Rauch
          </cite>
          <div className="text-lg text-muted-foreground">CEO, Vercel</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function VercelIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 222" {...props}>
      <path d="m128 0 128 221.705H0z" fill="currentColor" />
    </svg>
  );
}
