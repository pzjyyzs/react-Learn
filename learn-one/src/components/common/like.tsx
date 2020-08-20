import * as React from "react";

export interface LikeProps {
  liked: boolean | undefined;
  onClick: any;
}

const Like: React.SFC<LikeProps> = (props: LikeProps) => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={props.onClick}
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
