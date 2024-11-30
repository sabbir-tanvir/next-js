
export async function GET() {
  return Response.json({
    name: "Sabbir Tanvir",
    email: "Sabbir@gmail.com"
  })
}

export async function POST() {  
  return Response.json({
    name: "Tanvir Sabbir",
    email: "tanvir@gmail.com"
  })
}