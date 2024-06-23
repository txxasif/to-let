import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import MultipleImageSelector from "../mulipleImages";
export default function CreateTolet() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="primary"
          className="text-xl flex gap-2 items-center border m-2  hover:bg-slate-200 p-6 rounded-md"
        >
          <span>
            <img className="w-6 h-6" src="/home-add-svgrepo-com.png" alt="" />
          </span>
          Create Tolet
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <MultipleImageSelector />
      </DialogContent>
    </Dialog>
  );
}
