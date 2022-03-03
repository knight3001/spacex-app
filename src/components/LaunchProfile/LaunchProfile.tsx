import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { DogProfileQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
  data: DogProfileQuery;
}

const className = "LaunchProfile";

const LaunchProfile: React.FC<Props> = ({ data }) => {
  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <span>Breed {data.dog?.breed}: </span>
        <span className={`${className}__success`}>{data.dog?.subbreeds}</span>
      </div>
      {!!data.dog!.images && (
        <div className={`${className}__image-list`}>
          {data.dog!.images.map((image, i) =>
            image ? (
              <img
                src={image.url}
                className={`${className}__image`}
                key={image.id}
                alt={`${data.dog?.breed} ${i}`}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;
