import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getSubReseller, getSingleSubReseller, addSubReseller, clearMessages } from '../../redux/actions/subResellerAction';
import { CloseEye, CloseIcon, Edit } from "../../icons";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import { useTranslation } from "react-i18next";
import { getCountries, getDistricts, getProvinces } from "../../redux/actions/locationAction";
import Select from "../../components/form/Select";
import Swal from "sweetalert2";





const transactions = [
  { id: 1, country: "AF", number: "3567894", flag: "/public/images/img/company.png" },
  { id: 2, country: "IR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 3, country: "TR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 4, country: "AF", number: "3567894", flag: "/public/images/img/company.png" },
  { id: 5, country: "IR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 6, country: "TR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 7, country: "AF", number: "3567894", flag: "/public/images/img/company.png" },
  { id: 8, country: "IR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 9, country: "TR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 10, country: "AF", number: "3567894", flag: "/public/images/img/company.png" },
  { id: 11, country: "IR", number: "09152169657", flag: "/public/images/img/company.png" },
  { id: 12, country: "TR", number: "09152169657", flag: "/public/images/img/company.png" },
];

export default function AddSubReseller() {
const [isEditing,setIsEditing]=useState(true)
    const dispatch = useDispatch()
  const { countries, districts, provinces } = useSelector((state) => state.locationReducer)
  const {error,message,loading} =useSelector((state)=>state.subResellerListReducer)
  const { user_info } = useSelector((state) => state.auth)
  const [state, setState] = useState({ currency_preference_id: user_info.currency_preference_id });
  const [profileImage, setProfileImage] = useState(null);
  const [imageFile, setImageFile] = useState(null)
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [errorMessage,setErrorMessage]=useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("reseller_name", state.reseller_name)
    formData.append("contact_name", state.contact_name)
    formData.append("email", state.email)
    formData.append("phone", state.phone)
    formData.append("country_id", state.country_id)
    formData.append("province_id", state.province_id)
    formData.append("districts_id", state.districts_id)
    formData.append("currency_preference_id", state.currency_preference_id)

    if (imageFile) {
      formData.append("profile_image_url", imageFile);
    }

    dispatch(addSubReseller(formData))
  };

  useEffect(() => {
    if ( message|| error) {
      //console.log(message)
      //console.log(error)
      if(message){
        Swal.fire({
          title: "Good job!",
          text: message,
          icon: "success"
        });
        dispatch(clearMessages())
        setState({
              reseller_name: "",
              contact_name: "",
              email: "",
              phone: "",
              country_id: "",
              province_id: "",
              districts_id: "",
              currency_preference_id: user_info.currency_preference_id,
            });
        
            setProfileImage(null);
            setImageFile(null);
            navigate("/sub-reseller")
      }
      if(error){
        setErrorMessage(error)
        dispatch(clearMessages())
      }
    }
  }, [message, error, dispatch,navigate,user_info.currency_preference_id]);

  const handleChangeState = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setImageFile(file)
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getDistricts())
    dispatch(getProvinces())
  }, [dispatch])


    const {
        reseller_name,
        contact_name,
        email,
        phone,
        country_id,
        province_id,
        districts_id,
        currency_preference_id
      } = state;
    

 

      const handleEditClick = () => {
        setIsEditing(!isEditing);
      };
    
    

  return (
    <div className="">
      <div className="col-span-12 space-y-6 xl:col-span-12 mb-2">
        <h3 className="text-black font-medium">Add Sub Reseller</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-3">
        {/* Image Box */}
        <div onClick={()=>fileInputRef.current.click()} className="cursor-pointer border rounded-md items-center flex flex-col justify-center h-[350px] gap-2">
        {profileImage ? (
        <img
          src={profileImage}
          alt="Uploaded"
          className="h-[120px] w-[120px] rounded-full border border-gray-700 shadow-md"
        />
      ) : (
        <div className="h-[120px] w-[120px] rounded-full border border-gray-700 shadow-md flex items-center justify-center text-gray-500">
          Upload Image
        </div>
      )}
          <h5 className="text-sm text-gray-500 p-2 text-center">
            Allowed *.jpeg, *.jpg, *.png, *.gif Max size of 3.1 MB
          </h5>
          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={handleImageChange}
        />
        </div>

        {/* Info Section 1 */}
        

        <div className="flex flex-col bg-white rounded-md p-3 h-[400px] gap-2 justify-between">
          <div>
              <Label htmlFor="">Reseller Name</Label>
              <Input
                value={reseller_name||""}
                type="text"
                id="reseller_name"
                name="reseller_name"
                placeholder="Enter reseller name"
                onChange={handleChangeState}
                // disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            <div>
              <Label htmlFor="">Contact Name</Label>
              <Input
                value={contact_name||""}
                type="text"
                id="contact_name"
                name="contact_name"
                placeholder="Enter contact name"
                onChange={handleChangeState}
                //disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            <div>
              <Label htmlFor="">Email</Label>
              <Input
                value={email||""}
                type="text"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChangeState}
                //disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            <div>
              <Label htmlFor="">Phone</Label>
              <Input
                value={phone||""}
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                onChange={handleChangeState}
                //disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
           
        </div>

        

        <div className="flex flex-col bg-white rounded-md p-3 h-[400px] gap-2 justify-between">
            <div>
              <Label htmlFor="">Country</Label>
              <Input
                value={country_id||""}
                type="text"
                id="country_id"
                name="country_id"
                placeholder="Enter your name"
                onChange={handleChangeState}
                //disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            <div>
              <Label htmlFor="">Province</Label>
              <Input
                value={province_id||""}
                type="text"
                id="province_id"
                name="province_id"
                placeholder="Enter your name"
                onChange={handleChangeState}
                //disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            <div>
              <Label htmlFor="">District</Label>
              <Input
                value={districts_id||""}
                type="text"
                id="districts_id"
                name="districts_id"
                placeholder="Enter your name"
                onChange={handleChangeState}
                //disabled={!isEditing}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            <div>
              <Label htmlFor="">Currency Preference</Label>
              <Input
                type="text"
                id="currency_preference_id"
                name="currency_preference_id"
                placeholder="Enter your name"
                onChange={handleChangeState}
                disabled
                value={currency_preference_id || user_info.currency_preference_id}
                className={`font-bold ${isEditing ? "border-gray-400" : "bg-gray-100"} mt-1`}
              />
            </div>
            
        </div>
      </div>

      {/* Edit Button */}
      <div className="flex justify-end gap-2 mt-2">
        
        <button
          onClick={handleSubmit}
          className="bg-blue-700 text-white rounded-[50px] p-2 w-[150px]"
        >
          Save
        </button>
      </div>
    
    </div>
  );
}