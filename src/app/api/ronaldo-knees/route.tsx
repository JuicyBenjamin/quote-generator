import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const quote = searchParams.get('quote')
  const occasion = searchParams.get('occasion')
  return new ImageResponse(
    (
      <div
        tw='flex w-full h-full justify-center items-center'
      >
        <img alt="" className="w-full" src="https://cdn.discordapp.com/attachments/832022153150464002/1157705076039766127/221211111756-01-cristiano-ronaldo-loss-121022-restricted.jpg?ex=6519945f&is=651842df&hm=41578d0f62a4449094048b8f05ece200b998fdff7153d91f9021742cd916c75f&" />
        <div tw='bg-black text-white flex flex-col absolute w-64 h-64 left-64 p-8'>
          <p>{quote}</p>
          <p>{`Ronaldo on ${occasion ?? ''}`}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
