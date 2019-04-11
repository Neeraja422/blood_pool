

pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract donor{
    struct donor_detail{
        string name;
        string bloodg;
        string donated_to;
        uint blood_qty;
        bytes32 unique_id;
        uint contact;
    }
    struct hospital_detail{
        string hname;
        string addr;
        uint cont;
    }
    mapping(address=>hospital_detail) public hospital_details;
    mapping(address=>bool) public verify_hospital;
    donor_detail[] public donor_details;
    modifier onlyOwner(){
        address _customerAddress = msg.sender;
    _;
    }
    mapping(bytes32 => donor_detail) id_donor_detail;
    function submit (string memory _name,string memory _bloodg, string memory _donated_to, uint _blood_qty,uint _contact) onlyOwner()  public returns(bytes32){
        
        bytes32 unique_id=keccak256(abi.encodePacked(_name,_bloodg,_contact));
        donor_detail storage set_donor= id_donor_detail[unique_id];
        set_donor.name =_name;
        set_donor.bloodg= _bloodg;
        set_donor.donated_to= _donated_to;
        set_donor.blood_qty=_blood_qty;
        set_donor.contact= _contact;
        set_donor.unique_id=unique_id;
        donor_details.push(set_donor);
    } 
    function get_unique_id(string memory _name,string memory _bloodg,uint _contact) pure public returns(bytes32){
        bytes32 unique_id=keccak256(abi.encodePacked(_name,_bloodg,_contact));
        return unique_id;
    }
  
    function enter_unique_id(bytes32 _unique_id)  view public returns(string memory , string memory, string memory,uint, bytes32, uint){
        donor_detail storage donor_d = id_donor_detail[_unique_id];
        return (donor_d.name, donor_d.bloodg, donor_d.donated_to, donor_d.blood_qty, donor_d.unique_id, donor_d.contact);
    }
    function get_donors() view public returns(string[] memory,string[] memory,uint[] memory){

       uint length = donor_details.length;
    
        string[] memory name = new string[](length);
        string[] memory bloodg = new string[](length);
        uint[] memory contact = new uint[](length);
    
    for (uint i = 0; i < donor_details.length; i++) {
        donor_detail memory showDonor;
        showDonor = donor_details[i];
        
        name[i] = showDonor.name;
        bloodg[i] = showDonor.bloodg;
        contact[i] = showDonor.contact;
    }
    return(name,bloodg,contact);
       
       
       
    }
    function enter_hospital() onlyOwner view public returns(bool){
        if(verify_hospital[msg.sender]==true)
        return true;
        else
        return false;
    }
    function set_hospital_details(string memory _hname,string memory _addr,uint _cont)  public{
        hospital_detail memory hospital_d = hospital_details[msg.sender];
        hospital_d.hname=_hname;
        hospital_d.addr=_addr;
        hospital_d.cont=_cont;
        verify_hospital[msg.sender]=true;
    }
    
}