"use client";
import { LatestCard } from "@/src/restrurentDB/data";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Download } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function MenuDropdown({ names }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [query, setQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  const suggestions = useMemo(() => {
    if (!query) return [];

    const q = query.toLowerCase();

    return LatestCard.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.dynamic.shortLocation.toLowerCase().includes(q),
    ).slice(0, 6);
  }, [query]);


  return (
    <>
      <button
        className="underline cursor-pointer underline-offset-2 "
        onClick={onOpen}
      >
        {names}
      </button>
      <Modal
        backdrop="blur"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="max-w-[1127px] w-full lg:top-15 lg:bottom-8   bg-[#F6F6F6] dark:bg-slate-900 ">
          {(onClose) => (
            <>
              <ModalBody className="lg:min-h-[660px] h-full">
                <div className="w-full pt-4 lg:min-h-[331px] lg:max-h-[400px] rounded-[12px]">
                  {" "}
                  <Image
                    src="/dynamic/menu.png"
                    className="h-full w-full object-cover rounded-[12px] "
                    alt=""
                    width={1100}
                    height={400}
                  />
                </div>
              </ModalBody>
              <ModalBody>
                <div className="flex flex-col gap-2 justify-center items-center ">
                  <h2 className="text-[#232323] dark:text-gray-200 font-lexend font-semibold text-2xl md:text-[32px] text-center ">
                    Menu Bella Italia
                  </h2>
                  <Button
                    className="font-roboto text-base md:text-[19px] font-medium  flex  items-center rounded-[23.5px]"
                    variant="bordered"
                    color="primary"
                  >
                    {/* <Download /> */}
                    <a className="flex gap-3 items-center" href="/dynamic/menu.png" download>
                      <Download />
                      Download this menu
                    </a>
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
