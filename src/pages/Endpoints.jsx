import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
`;

const Th = styled.th`
  background-color: #74ad44;
  color: white;
  padding: 12px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-top: 20px;
`;

function Endpoints() {
    return (
        <>
            <Title>Endpoints</Title>
            <Table>
                <thead>
                    <Tr>
                        <Th>Method</Th>
                        <Th>URL</Th>
                        <Th>Request Body (JSON)</Th>
                        <Th>Response (JSON)</Th>
                        <Th>Error (e)</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/users</Td>
                        <Td></Td>
                        <Td>[user, user, ...]</Td>
                        <Td>(e3)</Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/users/{'{username}'}</Td>
                        <Td></Td>
                        <Td>user (1)</Td>
                        <Td>(e1, e3)</Td>
                    </Tr>
                    <Tr>
                        <Td>POST</Td>
                        <Td>/api/register</Td>
                        <Td>user(2) without id</Td>
                        <Td></Td>
                        <Td>(e2, e3)</Td>
                    </Tr>
                    <Tr>
                        <Td>POST</Td>
                        <Td>/api/login</Td>
                        <Td>user(2) without id</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>POST</Td>
                        <Td>/api/user/addrole</Td>
                        <Td>user(2) without id</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>UPDATE</Td>
                        <Td>/api/users/username</Td>
                        <Td>user(4) with id</Td>
                        <Td> user(5)</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>DELETE</Td>
                        <Td>/api/users/username</Td>
                        <Td>user(6) with id</Td>
                        <Td>user 7</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/events</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>[event, event]</Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/events/id</Td>
                        <Td>user(2) without id</Td>
                        <Td></Td>
                        <Td>event(1)</Td>
                    </Tr>
                    <Tr>
                        <Td>POST</Td>
                        <Td>/api/events/create</Td>
                        <Td>user(9) without id</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>UPDATE</Td>
                        <Td>/api/events/update/id</Td>
                        <Td>user(8) with id</Td>
                        <Td></Td>
                        <Td>event(8)</Td>
                    </Tr>
                    <Tr>
                        <Td>DELETE</Td>
                        <Td>/api/events/delete/id</Td>
                        <Td>event(8) with id</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/locations</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td> </Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/locations/id</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>POST</Td>
                        <Td>/api/locations/create</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>UPDATE</Td>
                        <Td>/api/locations/update/id</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>DELETE</Td>
                        <Td>/api/locations/delete/id</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/events/concerts</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>[concert, concdert, ..]</Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/events/lectures</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>[lecture, lecture, ..]</Td>
                    </Tr>
                    <Tr>
                        <Td>GET</Td>
                        <Td>/api/events/theaters</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>[theater, theater, ..]</Td>
                    </Tr>
                </tbody>
            </Table>
        </>
    );
}

export default Endpoints;