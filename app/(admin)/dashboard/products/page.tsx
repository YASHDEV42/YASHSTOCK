import Products from "@/components/admin/Products";
import prisma from "@/lib/db";
import { category, Product } from "@/types";

import React from "react";

type Props = {};

const page = async (props: Props) => {
  const reversedProducts: any = await prisma.product.findMany();
  const categories: any = await prisma.category.findMany();
  const products: Product[] = reversedProducts.reverse();

  return (
    <main className="min-h-screen w-full mr-0 pt-36 flex justify-start items-center flex-col">
      <Products products={products || null} categories={categories || null} />
    </main>
  );
};

export default page;
