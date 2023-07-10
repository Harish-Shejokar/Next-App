import React from "react";
import { useRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();
  const pathname = router.query.AboutId;
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
 
  let item = "";
  if (pathname == null || pathname > 3) item = "Developer doesn't exist";
  else {
    const filterDetails = details.filter((item) => item.id == pathname);
    item = `${filterDetails[0].name} ${filterDetails[0].role}`;
  } 

  console.log(pathname == null);
  return (
    <div>
      <h1>About Page</h1>
      <h2>{item}</h2>
    </div>
  );
};

export default AboutPage;
