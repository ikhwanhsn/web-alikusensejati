import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogImage,
  DialogContainer,
} from "@/components/core/dialog";
import { XIcon } from "lucide-react";

export function ImagePopUp({ src, alt }: { src: any; alt: any }) {
  return (
    <main className="overflow-hidden">
      <section className="shadow-sm transform transition-transform duration-500 hover:scale-110">
        <Dialog
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <DialogTrigger>
            <DialogImage src={src} alt={alt} className="w-60 rounded-[4px]" />
          </DialogTrigger>
          <DialogContainer>
            <DialogContent className="relative">
              <DialogImage
                src={src}
                alt="Sony Style Store in the Sony Center complex - Berlin, Germany (2000)"
                className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
              />
            </DialogContent>
            <DialogClose
              className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
              }}
            >
              <XIcon className="h-5 w-5 text-zinc-500" />
            </DialogClose>
          </DialogContainer>
        </Dialog>
      </section>
    </main>
  );
}
