import React, { useEffect } from "react";
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

import { Container, Row, Col, Card, CardBody, Form } from "reactstrap";
import { Link } from "react-router-dom";

// import

const Login = () => {
  document.title = "Login | Mr. Paquetes";
    useEffect(() => {
        document.body.className = "bg-pattern";
        // remove classname when component will unmount
        return function cleanup() {
          document.body.className = "";
        };
      });
  return (
    <React.Fragment>
      <div className="bg-overlay"></div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8} xl={4}>
              <Card>
                <CardBody className="p-4">
                  <div>
                    <div className="text-center">
                      <Link to="/">
                        <img
                          src={logodark}
                          alt=""
                          height="24"
                          className="auth-logo logo-dark mx-auto"
                        />
                        <img
                          src={logolight}
                          alt=""
                          height="24"
                          className="auth-logo logo-light mx-auto"
                        />
                      </Link>
                    </div>
                    <h4 className="font-size-18 text-muted mt-2 text-center saludo">
                      Bienvenido!
                    </h4>
                    <p className="mb-5 text-center">
                      Inicia sesión para continuar.
                    </p>
                    <Form className="form-horizontal" action="#">
                      <Row>
                        <Col md={12}>
                          <div className="mb-4">
                            <label className="form-label" htmlFor="username">
                              Usuario
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              placeholder="Ingrese su correo"
                              defaultValue="admin@themesbrand.com"
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="form-label"
                              htmlFor="userpassword"
                            >
                              Contraseña
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="userpassword"
                              placeholder="Ingrese su contraseña"
                              defaultValue="123456"
                            />
                          </div>

                          <Row>
                            <Col className="col-7">
                              <div className="text-md-end mt-3 mt-md-0">
                                <Link
                                  to="/auth-recoverpw"
                                  className="text-muted"
                                >
                                  <i className="mdi mdi-lock"></i>Cambiar contraseña?
                                </Link>
                              </div>
                            </Col>
                          </Row>
                          <div className="d-grid mt-4">
                            <a
                              className="btn btn-primary waves-effect waves-light"
                              type="submit"
                              href="/dashboard"
                            >
                              Iniciar Sesión
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p className="text-white-50">
                  No tienes una cuenta?{" "}
                  <Link to="/auth-register" className="fw-medium text-primary plushAcount">
                    {" "}
                    Regístrate{" "}
                  </Link>{" "}
                </p>
                <p className="text-center text-white-50">
                  Mr. Paquetes © 2024 | Todos los derechos reservados
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Login;
