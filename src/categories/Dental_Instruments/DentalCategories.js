import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DentalCategories = () => {
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
                      <Link className="listGroup_item_link" to="">
                         Extracting Forceps
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Root Elevators
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Filling Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Dental Probes
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Periodontia & Mallets
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Currets & Scalars
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Modeling & Measuring Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Wax & Plaster Knives
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Explorers & Endodontic Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Excavators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Handles for Mouth Mirrors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Spatulas
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Needle Holders & Saliva Ejectors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Syringes
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Dental Tweezers
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Rubber Dam Clamps
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Crown Razors, Scissors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Copper Ring Remover
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Bone Elevators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Pliers for Orthotonoics
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Impression Trays
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Articulators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Hollowares
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Matrix Retainers & Matrix Bands
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="">
                      Rongeurs
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
        </div>
    );
};

export default DentalCategories;