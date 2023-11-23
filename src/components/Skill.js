import { useState } from "react";
import { useForm } from "react-hook-form";

const ShowSkills = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li id={skill.id}>{skill.title}</li>
      ))}
    </ul>
  );
};

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function saveData(data) {
    setSkills([
      ...skills,
      {
        title: data.title,
        id: "skill-" + Math.floor(Math.random() * 10000),
      },
    ]);

    reset();
  }

  return (
    <div className="container">
      <h1>React Form Practice</h1>
      <div className="my-5 bg-dark text-white rounded shadow p-4">
        <ShowSkills skills={skills} />
      </div>
      <form
        onSubmit={handleSubmit(saveData)}
        className="form-control shadow p-4"
      >
        <div className="row">
          <div className="col">
            <input
              type="text"
              {...register("title", { required: true })}
              className="form-control"
            />
            {errors.title && (
              <span className="text-danger">This is required</span>
            )}
          </div>
        </div>

        <div className="col mt-4">
          <button type="submit" className="btn btn-info">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skill;
