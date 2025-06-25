import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiLink, FiPhone, FiPlus } from "react-icons/fi";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const [value, setValue] = useState("");

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md mx-auto mt-12 border-stone-300 bg-white rounded shadow-lg overflow-hidden"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="Type a command or search..."
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List>
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">'{value}'</span>
          </Command.Empty>
          <Command.Group heading="Team" className="text-sm mb-3 text-stone-400 p-2">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPlus />
              Invite Member
            </Command.Item>

            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiEye />
              See Org Chart
            </Command.Item>
          </Command.Group>
          <Command.Group
            heading="Integrations"
            className="text-sm text-stone-400 mb-3 p-2"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiLink />
              Link Services
            </Command.Item>

            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              <FiPhone />
              Contact Support
            </Command.Item>
          </Command.Group>

          {/* <Command.Item>Apple</Command.Item> */}
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
