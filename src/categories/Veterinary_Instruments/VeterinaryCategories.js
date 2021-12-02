import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const VeterinaryCategories = () => {
    return (
        <div>
            <Card className="listGroup_card_width">
                  <ListGroup>
                    <ListGroup.Item
                      style={{ backgroundColor: "black" }}
                      className="text-white"
                    >
                      <b>ALL CATEGORIES</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Diagnostic">
                      Diagnostic
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Scalpels">
                      General Surgery
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Scissors">
                      Orthopedic
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/DissectingAndTissue">
                      Eye Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Sponge">
                      Castration
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/VesselClips">
                      Small Animal
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Ligature">
                      Large Animal
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/NeedleHolders">
                      Miscellaneous
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/WoundRetractors">
                      Holloware
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    
                  </ListGroup>
                </Card>
        </div>
    );
};

export default VeterinaryCategories;