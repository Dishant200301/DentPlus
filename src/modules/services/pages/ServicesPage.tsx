import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { BadgePill } from "@/modules/core/components/BadgePill";
import { PrimaryButton } from "@/modules/core/components/PrimaryButton";
import { HomeCta } from "@/modules/home/components/HomeCta";
import { ServicesHero } from "../components/ServicesHero";
import { ServicesValues } from "../components/ServicesValues";
import { ServicesExpertise } from "../components/ServicesExpertise";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesValues />
      <ServicesExpertise />
      <HomeCta />
    </>
  );
}
