
export default async (request, context) => {
  const { searchParams } = new URL(request.url);
  const item = searchParams.get("item");
  const country = searchParams.get("country") || "au";
  const price = await mockPrice(item, country);
  return new Response(JSON.stringify({ price }), {
    headers: { "content-type": "application/json" },
  });
};

async function mockPrice(item, country){
  return (Math.random()*3+1).toFixed(2); // placeholder
}
