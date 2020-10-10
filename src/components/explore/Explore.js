import React from "react";
import "./Explore.css";
import EducationBanner from "../../assets/img/education_banner.jpg";
import CourseCard from "../courseCard/CourseCard";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__container">
        <img className="explore__image" src={EducationBanner} alt="Education" />
        <div className="explore__row">
          <CourseCard
            title="Fundamentals of Residential Property Management"
            price={299.99}
            image="https://img-a.udemycdn.com/course/240x135/2013262_70bd_2.jpg?B6rUiGFwn9EspsAjE4QYihJTFWEck0PY3vOcPoEZNVajysTWnet2XQxHTfKnhzl5PnOWykrI8SwQnHgkhSUf4edJGyZFpp9tQwigh8RMtOwMLukU1j-me-klxZMrZM8g"
            rating={4}
          />
          <CourseCard
            title="Property Management 101"
            price={99.99}
            image="https://img-a.udemycdn.com/course/240x135/804238_bf7d_2.jpg?epMy5Hayd5cq76pke-Ksqq_r_Lwpt6ny0Sk9vTQShul6HrFWQha_UVmjCwHzgCCt8oRBEND2r3_6CnBL3jiNTdTWX_npbtCYS8Y0pdZ_rD8VpQeRIDf7JUiFugbJYsY"
            rating={5}
          />
        </div>

        <div className="explore__row">
          <CourseCard
            title="Effective Property Management Advanced Course Module 2"
            price={79.99}
            image="https://img-a.udemycdn.com/course/240x135/1247214_3186.jpg?86VLqaXuUheTwuZ-2_o3Dnq_N1HCwUymT7qZqZmOBgbatxGiIsyMWwi8bYoCo9NtgJBRLwd64zJxdtp2cstE4PX2MBnJgN9pGH3LBbW0TPj8FnT6QqeC_xdvW52Qgw"
            rating={4}
          />
          <CourseCard
            title="Automation Anywhere Foundations A-Z"
            price={14.99}
            image="https://img-a.udemycdn.com/course/240x135/2795850_aa4e_2.jpg?SBj9s-iZfhKs5D3wKXWgwAsGfbAGzwmGVFH7iuvfiamwbNNSkXZYzOGYQRnY2mKlom0o_oB8TO28FkqkDXbsX0tNjAous60Oz0JU2l0HhZMxTuskO7CTLmCXb7N7DAO2"
            rating={3}
          />
          <CourseCard
            title="Commercial Property Management"
            price={49.99}
            image="https://img-a.udemycdn.com/course/240x135/2439854_1c43_2.jpg?AuSmVYvuktnpYOtrulsnXrxUtokwoyAd0Nh84XC6GUkMelBugg6B4k-BsVJ1tlUOMb8c9_GoqNA4mIIDmte-wTPvnhN3JjfkeEd-bMwY0yub4Tp4VMxTrycktTrgtwRj"
            rating={5}
          />
        </div>

        <div className="explore__row">
        <CourseCard
            title="The Official Course for First Time Home Buyers"
            price={29.99}
            image="https://img-a.udemycdn.com/course/240x135/2998318_993c_4.jpg?l9XFjHVOBanUFA5hHQg6i-YGXYdtmOCR6H4qEtMUJn1nwYlrSv0OmIz7vPLP3v_-BJEgkfNWcpBrDcBFhZDRSIbXkxwk-pe2TTDexUV4rV3Y94aFQzY_Ar4lHmO7d1a2"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
