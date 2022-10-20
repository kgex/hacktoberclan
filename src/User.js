import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";


const userQuery = gql` {
    viewer {
     name
     email
   }
}`

const FILMS_QUERY = gql`
query {
    user(login: "tarunkumark") {
      name
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
            firstDay
          }
        }
      }
    }
  }
`;

function User() {

    const { data, loading, error } = useQuery(userQuery);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    return (
        <div>
            <h1>SpaceX Launches</h1>
            <ul>
                {data}
            </ul>
        </div>
    );
}

export default User;
