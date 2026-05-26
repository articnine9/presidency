"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ApplicationModal } from "@/app/components/ApplicationModal";

interface ApplicationContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined
);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ApplicationContext.Provider
      value={{ isOpen: isModalOpen, openModal, closeModal }}
    >
      {children}
      <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
    </ApplicationContext.Provider>
  );
}

export function useApplication() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplication must be used within ApplicationProvider"
    );
  }
  return context;
}
