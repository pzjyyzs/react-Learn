import React from "react";

export interface MovieFormProps {
  match: any;
  history: any;
}

const MovieForm: React.SFC<MovieFormProps> = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push("/movies");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
