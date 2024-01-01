#Create Note
Endpoint: POST /notes
Description: Adds a new note to the database.
Request Method: POST
Request Body Format:
{
  "title": "Note Title",
  "content": "Note Content"
}

Response Format:
{
  "title": "Note Title",
  "content": "Note Content",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}

Status Codes:
201 Created: Successfully created a new note.
400 Bad Request: Invalid request body.
500 Internal Server Error: Server encountered an error.


#Retrieve Notes
Endpoint: GET /notes
Description: Retrieves a list of all notes.
Request Method: GET
Response Format:
[
  {
    "title": "Note 1 Title",
    "content": "Note 1 Content",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  },
  {
    "title": "Note 2 Title",
    "content": "Note 2 Content",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
]

Status Codes:
200 OK: Successfully retrieved the list of notes.
500 Internal Server Error: Server encountered an error.


#Retrieve Single Note
Endpoint: GET /notes/:id
Description: Retrieves a single note by its ID.
Request Method: GET
Response Format:
{
  "title": "Note Title",
  "content": "Note Content",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}

Status Codes:
200 OK: Successfully retrieved the note.
404 Not Found: Note with the specified ID not found.
500 Internal Server Error: Server encountered an error.


#Update Note
Endpoint: PUT /notes/:id
Description: Updates the content of an existing note.
Request Method: PUT
Request Body Format:
{
  "title": "Updated Note Title",
  "content": "Updated Note Content"
}

Response Format:
{
  "title": "Updated Note Title",
  "content": "Updated Note Content",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}

Status Codes:
200 OK: Successfully updated the note.
404 Not Found: Note with the specified ID not found.
500 Internal Server Error: Server encountered an error.


#Delete Note
Endpoint: DELETE /notes/:id
Description: Deletes a note from the database.
Request Method: DELETE
Response Format:
{
  "message": "Note deleted successfully"
}

Status Codes:
200 OK: Successfully deleted the note.
404 Not Found: Note with the specified ID not found.
500 Internal Server Error: Server encountered an error.
