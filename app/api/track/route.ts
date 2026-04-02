export async function POST(req: Request) {
  const body = await req.json();

  return Response.json(
    body.bl.map((b: string) => ({
      bl: b,
      status: "IN TRANSIT",
      carrier: "MAERSK",
      location: "ATLANTIC OCEAN",
      eta: "2026-04-10"
    }))
  );
}
