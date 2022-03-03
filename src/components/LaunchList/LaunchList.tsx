import * as React from "react";
import { GetDogsQuery } from "../../generated/graphql";
import "./styles.css";

export interface OwnProps {
  handleChange: (newid: string) => void;
}

interface Props extends OwnProps {
  data: GetDogsQuery;
}

const className = "LaunchList";

const LaunchList: React.FC<Props> = ({ data, handleChange }) => (
  <div className={className}>
    <h3>Dogs</h3>
    <ol className={`${className}__list`}>
      {!!data.dogs &&
        data.dogs.map(
          (dog, i) =>
            !!dog && (
              <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleChange(dog.breed)}
              >
                {dog.id} ({dog.breed})
              </li>
            )
        )}
    </ol>
  </div>
);

export default LaunchList;
