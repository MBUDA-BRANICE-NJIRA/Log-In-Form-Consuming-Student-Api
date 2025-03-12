import React, { useState, useEffect } from "react";
import { Container, Form, Button, Spinner, Alert, Card } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  const { studentId } = useParams();
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/students/getStudent/${studentId}`);
        setFormData({
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          gender: response.data.gender || "",
        });
      } catch (err) {
        setError("Failed to fetch student details.");
        toast.error("Error fetching student details.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.put(`http://localhost:4000/students/updateStudent/${studentId}`, formData);
      toast.success("Student updated successfully!");
      setTimeout(() => history.push("/"), 2000);
    } catch (err) {
      toast.error("Failed to update student.");
    } finally {
      setSubmitting(false);
    }
  };

  // 🔴 DELETE STUDENT FUNCTION  
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    
    if (confirmDelete) {
      try {
        // await axios.delete(http:localhost:4000/students/deleteStudent/${studentId});
        toast.success("Student deleted successfully!");
        setTimeout(() => history.push("/"), 2000);
      } catch (err) {
        toast.error("Failed to delete student.");
      }
    }
  };

  return (
    <Container className="py-5">
      <ToastContainer />
      <Card>
        <Card.Header>Update Student</Card.Header>
        <Card.Body>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>

              <div className="d-flex justify-content-between mt-3">
                <Button type="submit" disabled={submitting} variant="primary">
                  {submitting ? "Updating..." : "Update"}
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </div>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateStudent;
