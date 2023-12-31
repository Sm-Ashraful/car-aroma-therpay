import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import FormSubmitButton from "@/components/FormSubmitButton";
import { formatPrice } from "@/components/formatPrice";

// TODO remove, this demo shouldn't need to reset the theme.

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          maxWidth="md"
          height={400}
          sx={{
            margin: "auto",
            bgcolor: "background.paper",
            backgroundImage: `url("./5.webp")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="black"
              gutterBottom
            >
              Car Therapy
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
          </Container>
        </Box>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 px-5 md:px-40 mt-10">
          {products.slice(0, 3).map((card) => (
            <Link key={card.id} href={`/product/${card.id}`}>
              <div
                className={`bg-customTheme relative w-full h-auto border border-customTheme/20 rounded-md  transition-all duration-300 cursor-pointer`}
              >
                {/* image section  */}
                <div className="w-full ">
                  <div className="w-full h-[180px] md:h-[260px] underline  bg-white overflow-hidden  rounded-md text-center flex justify-center items-center group border-b  ">
                    <div className="w-full h-auto  relative group-hover:scale-125 transition-all  duration-1000 text-center flex justify-center items-center">
                      <img
                        src={card.imageUrl}
                        alt="product Image"
                        className="bg-cover w-full h-full "
                      />
                    </div>
                  </div>

                  {/* description section  */}
                  <div className="w-full h-full px-[5px] md:px-[10px] pb-4 pt-5 flex flex-col justify-center">
                    <div className="text-white">
                      {
                        <p className=" pb-1.5 text-md font-semibold text-white min-h-[80px]">
                          {card.name.length > 50
                            ? card.name.slice(0, 50) + "..."
                            : card.name}
                        </p>
                      }

                      <p className="text-[13px] font-bold  pb-1.5 text-yellow-600">
                        Price: {formatPrice(parseFloat(card.price))}
                      </p>
                      <p className="text-[13px] font-bold  pb-3">
                        Minimum Order Quantity: {card.moq}
                      </p>
                    </div>
                    <div className="w-full">
                      <FormSubmitButton className="px-6 py-2 border bg-white text-black  rounded-full w-full">
                        Shop Now
                      </FormSubmitButton>
                    </div>
                  </div>

                  {/* offer section  */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      {/* Footer */}

      {/* End footer */}
    </React.Fragment>
  );
}
