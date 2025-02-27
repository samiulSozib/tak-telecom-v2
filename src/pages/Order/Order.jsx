import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/orderAction";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";


export default function Order() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterStatus, setFilterStatus] = useState("");
  const dispatch = useDispatch();
  const { orderList, total_items } = useSelector((state) => state.orderListReducer);
  const { user_info } = useSelector((state) => state.auth);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { t, i18n } = useTranslation();

  const isRtl = i18n.language === "ar" || i18n.language === "fa" || i18n.language === "ps";

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };


    useEffect(() => {
        dispatch(getOrders(page + 1, rowsPerPage, filterStatus,""));
      }, [dispatch, page, rowsPerPage, filterStatus]);



  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <h3 className="text-black font-medium">Orders</h3>
      </div>

      

      <div className="border rounded-md bg-[#EEF4FF] col-span-12 space-y-6 xl:col-span-12 p-2">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Phone Number Input */}
            <div className="bg-white rounded-lg">
                <form>
                    <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg
                        className="fill-gray-500 dark:fill-gray-400"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                        />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Destination phone number"
                        className="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    </div>
                </form>
            </div>

            {/* Transfer Amount Input */}
            <div className="bg-white rounded-lg">
                <form>
                    <div className="relative">
                    <input
                        type="text"
                        placeholder="Transfer amount"
                        className="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-4 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-white/80">
                        AFN
                    </span>
                    </div>
                </form>
            </div>

            {/* Submit Button */}
            <div className="bg-white rounded-lg">
                <form>
                    <div className="relative">
                    <input
                        type="text"
                        placeholder="Transfer amount"
                        className="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-4 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-none focus:ring focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-white/80">
                        AFN
                    </span>
                    </div>
                </form>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Submit Button */}
            <div className="flex items-center">
                <button style={{borderRadius:'50px'}} className="h-8 w-full bg-blue-800 text-white text-sm font-semibold hover:bg-green-600 transition">
                    Apply Filter
                </button>
            </div>
            <div className="flex items-center">
                <button style={{borderRadius:'50px'}} className="border border-red-500 h-8 w-full bg-white text-red-500 text-sm font-semibold hover:bg-green-600 transition">
                    Remove Filter
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {orderList.map((order) => (
            <div>
              {/* Main Card */}
              <div key={order.id} onClick={()=>handleClickOpen(order)} className="cursor-pointer col-span-1 mb-3">
                <div className={`flex gap-1  flex-col bg-white shadow-md rounded-lg border ${order.status === 2 ? 'border-red-500' : order.status===1? 'border-yellow-300' : 'border-green-500'} p-2`}>

                  <div className={`${order.status === 2 ? 'bg-red-500' : order.status===1? 'bg-green-500' : 'bg-yellow-500'} font-medium text-white flex flex-row justify-between items-center rounded-t-md px-2 py-1`}>
                    <span>Order Id (# {order.id})</span>
                    <span className="">{format(new Date(order.created_at), 'dd-MM-yyyy')}</span>
                  </div>

                  <div className={`text-sm flex flex-row justify-between items-center rounded-md px-2 py-1`}>
                    <span className="text-gray-500">Bundle Title</span>
                    <span className="font-bold">{order.bundle.bundle_title}</span>
                  </div>

                  <div className={`text-sm flex flex-row justify-between items-center rounded-md px-2 py-1`}>
                    <span className="text-gray-500">Rechargeable Account</span>
                    <span className="font-bold">{order.rechargeble_account}</span>
                  </div>

                  <div className={`text-sm flex flex-row justify-between items-center rounded-md px-2 py-1`}>
                    <span className="text-gray-500">Transaction Status</span>
                    <div
                      className={`${
                        order.status === 2 ? "bg-red-500" : order.status === 1 ? "bg-green-500" : "bg-yellow-500"
                      } font-medium text-white flex flex-row justify-between items-center rounded-md px-2 py-1`}
                    >
                      {order.status === 2 ? "Rejected" : order.status === 1 ? "Successful" : "Pending"}
                    </div>
                  </div>
                  
                  <div className={`text-sm flex flex-row justify-between items-center rounded-md px-2 py-1`}>
                    <span><span className="text-gray-500">Buy:</span> <strong>{order.bundle.buying_price} {user_info.currency.code}</strong></span>
                    <span><span className="text-gray-500">Sell:</span> <strong>{order.bundle.selling_price} {user_info.currency.code}</strong></span>
                  </div>

                </div>
              </div>

              
            </div>
          ))}
        </div>

      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-80 text-left m-2">
          <div className={`border ${selectedOrder.status === 2 ? "border-red-500" : selectedOrder.status === 1 ? "border-green-500" : "border-yellow-500"} rounded-md flex flex-col gap-3`}>

              <div className="flex items-center justify-center mt-3">
                <img src={selectedOrder.status===0?'/public/images/img/Pending.png':selectedOrder.status===1?"/public/images/img/Success.png":"/public/images/img/Unsuccess.png"} alt="" className="w-[70px] h-[70px] object-contain"/>
              </div>

              <div className="flex flex-col gap-2 p-3">
                <div className="flex flex-row justify-between">
                  <span className="text-gray-400 text-sm">Bundle Title</span>
                  <span className="text-black text-sm">{selectedOrder.bundle.bundle_title}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-400 text-sm">Phone Number</span>
                  <span className="text-black text-sm">{selectedOrder.rechargeble_account}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-400 text-sm">Validity Type</span>
                  <span className="text-black text-sm">{(selectedOrder?.bundle?.validity_type)?.toUpperCase()}</span>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-gray-400 text-sm">Order ID</span>
                  <span className="text-black text-sm">{user_info.currency.code} {selectedOrder.bundle.selling_price}</span>
                </div>
              </div>

              <div className={`${selectedOrder.status === 2? "bg-red-100 border-red-500": selectedOrder.status === 1? "bg-green-100 border-green-500": "bg-yellow-100 border-yellow-500"} border rounded-lg p-3 flex items-center m-3`}>
                {/* Icon on the Left */}
                <img 
                  src="/public/images/img/whatsapp.png" 
                  alt="Logo" 
                  className="h-12 w-12 rounded-lg object-contain"
                />

                {/* Date & Time Section */}
                <div className="flex flex-col ml-3 w-full">
                  <div className="flex items-center justify-between w-full text-gray-600 text-sm">
                    <span className="font-medium">Date:</span>
                    <span className="font-semibold text-gray-800">01-05-2025</span>
                  </div>
                  
                  <div className="flex items-center justify-between w-full text-gray-600 text-sm mt-1">
                    <span className="font-medium">Time:</span>
                    <span className="font-semibold text-gray-800">1:59 PM</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-row gap-3 justify-between items-center">
              <button className="rounded-[50px] bg-blue-700 m-3 px-5 py-2 w-[120px] text-white text-center">Share</button>
              <button className="rounded-[50px] bg-white m-3 px-5 py-2 w-[120px] text-blue-700 text-center border-2 border-blue-700">Download</button>
            </div>

            <div className="flex flex-row justify-center">
              <button onClick={handleClose} className="border-2 border-gray-500 w-full rounded-[50px] py-2 text-black font-bold">Close</button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}