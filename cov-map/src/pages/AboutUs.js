import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileMember from "../components/aboutUs/profile";

export default function AboutUs() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const member = [
    {
      name: "Tran Hoang Thao Ngan",
      description: "Leader, Backend",
      srcImg: "/Ava_Ngan.jpg",
      linkFb: "https://www.facebook.com/ngn.tranhoangthao",
      linkedIn: "",
      linkGit: "",
    },
    {
      name: "Le Thien Kim",
      description: "Backend",
      srcImg: "Ava_Kim.jpg",
      linkFb: "https://www.facebook.com/profile.php?id=100061739424693",
      linkedIn: "",
      linkGit: "",
    },
    {
      name: "Le Thi Phuong Linh",
      description: "Frontend, Design Leader",
      srcImg: "/Ava_Linh.jpg",
      linkFb: "https://www.facebook.com/profile.php?id=100011703906233",
      linkedIn: "",
      linkGit: "https://github.com/thisislins",
    },
    {
      name: "Nguyen Thi Ngoc Dieu",
      description: "Tester, Team Assistant",
      srcImg: "/Ava_Dieu.png",
      linkFb: "https://www.facebook.com/ndiuu",
      linkedIn: "",
      linkGit: "",
    },
    {
      name: "Le Hoang Kim Thanh",
      description: "Design, Frontend",
      srcImg: "/Ava_Thanh.jpg",
      linkFb: "https://www.facebook.com/kimthanh3001",
      linkedIn: "",
      linkGit: "",
    },
  ];
  return (
    <div>
     
      <div className="text-xl font-bold pl-2 pb-0 mt-16 ">
        <div className="text-5xl font-bold text-gray-800 text-center mb-4">ABOUT US</div>
      </div>
      <Slider {...settings}>
          {member.map((item) => (
          <div className="p-2">
            <ProfileMember child={item}></ProfileMember>
          </div>
        ))}
      </Slider>
    </div>
  );
}