import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, card } = body;

  if (!amount || !card) {
    return NextResponse.json(
      { status: "error", message: "Missing fields" },
      { status: 400 }
    );
  }

  // simulation logique monétique

  // carte refusée
  if (card === "4000000000000002") {
    return NextResponse.json({
      status: "refused",
      code: "05",
      message: "Do not honor"
    });
  }

  // montant trop élevé
  if (amount > 1000) {
    return NextResponse.json({
      status: "refused",
      code: "51",
      message: "Insufficient funds"
    });
  }

  // succès
  return NextResponse.json({
    status: "approved",
    code: "00",
    transactionId: Math.random().toString(36).substring(2)
  });
}