import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SurgicalCategories = () => {
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
                      Scalpels
                      </Link>{" "}
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Scissors">
                      Scissors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/DissectingAndTissue">
                      Dissecting & Tissue
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Sponge">
                      Sponge
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/VesselClips">
                      Vessel Clips
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Ligature">
                      Ligature
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/NeedleHolders">
                      Needle Holders
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/WoundRetractors">
                      Wound Retractors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Probes">
                      Probes
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/SelfRetainingRetractors">
                      Self Retaining Retractors
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/AbdominalSurgery">
                      Abdominal Surgery
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/GallBladder">
                      Gall Bladder
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/GenitoUrinaryIntruments">
                      Genito Urinary Intruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/VaginalSpecula">
                      Vaginal Specula
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/UterineProbes">
                      Uterine Probes
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/BiopsyInstruments">
                      Biopsy Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Obstretrics">
                      Obstretrics
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Cardiovascular">
                      Cardiovascular
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/BonePunches">
                      Bone Punches
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Elevators">
                      Elevators
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/Mallets">
                      Mallets
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/BoneHolding">
                      Bone Holding
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/PlasterInstruments">
                      Plaster Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/SuctionInstruments">
                      Suction Instruments
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/HospitalWares">
                      Hospital Wares
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link className="listGroup_item_link" to="/ScissorsWithTungston">
                      Scissors with Tungston
                      </Link>
                      <ChevronRightIcon />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
        </div>
    );
};

export default SurgicalCategories;