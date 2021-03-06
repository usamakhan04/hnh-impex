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
                      <Link className="listGroup_item_link" to="/ExtractingForceps">
                         Extracting Forceps
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/RootElevators">
                      Root Elevators
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/FillingInstruments">
                      Filling Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/DentalProbes">
                      Dental Probes
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/PeriodontiaAndMallets">
                      Periodontia & Mallets
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/CurretsAndScalars">
                      Currets & Scalars
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/ModelingAndMeasuringInstruments">
                      Modeling & Measuring Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/WaxAndPlasterKnives">
                      Wax & Plaster Knives
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/ExplorersAndEndodonticInstruments">
                      Explorers & Endodontic Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Excavators">
                      Excavators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/HandlesForMouthMirrors">
                      Handles for Mouth Mirrors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Spatulas">
                      Spatulas
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/NeedleHoldersAndSalivaEjectors">
                      Needle Holders & Saliva Ejectors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Syringes">
                      Syringes
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/DentalTweezers">
                      Dental Tweezers
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/RubberDamClamps">
                      Rubber Dam Clamps
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/CrownRazorsAndScissors">
                      Crown Razors, Scissors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/CopperRingRemover">
                      Copper Ring Remover
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/BoneElevators">
                      Bone Elevators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/PliersForOrthotonoics">
                      Pliers for Orthotonoics
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/ImpressionTrays">
                      Impression Trays
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Articulators">
                      Articulators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Hollowares">
                      Hollowares
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/MatrixRetainersAndMatrixBands">
                      Matrix Retainers & Matrix Bands
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Rongeurs">
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