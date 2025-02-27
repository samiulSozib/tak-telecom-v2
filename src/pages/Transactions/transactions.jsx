import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../redux/actions/transactionAction";
import { format } from "date-fns";


export default function Transaction() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const dispatch = useDispatch();
    const { transactionList, total_items } = useSelector((state) => state.transactionListReducer);
    const { user_info } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getTransactions(page + 1, rowsPerPage));
      }, [dispatch, page, rowsPerPage]);

    useEffect(()=>{
        console.log(transactionList)
    },[dispatch])

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <h3 className="text-black font-medium">Transactions</h3>
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
          {transactionList.map((transaction) => (
            <div>
              {/* Main Card */}
              <div key={transaction.id} className="col-span-1 mb-3">
                <div className={`flex gap-1  flex-col bg-white shadow-md rounded-lg border ${transaction.status === 'debit' ? 'border-red-500' : 'border-green-500'} p-2`}>

                  <div className={`${transaction.status === 'debit' ? 'bg-red-500' : 'bg-green-500'} font-medium text-white flex flex-row justify-between items-center rounded-t-md px-2 py-1`}>
                    <span>{transaction.reseller.reseller_name}</span>
                    <span>{format(new Date(transaction.created_at), 'dd-MM-yyyy')}</span>
                  </div>

                  <div className="flex flex-row justify-between items-center px-2 mt-1">
                    <span className="text-gray-500">Transaction Type:</span>
                    <span className={`${transaction.status === 'debit' ? 'bg-red-200 text-red-500' : 'bg-green-200 text-green-500'} rounded-md p-1 capitalize`} >{transaction.status}</span>
                  </div>

                  <div className="flex flex-row justify-between items-center px-2">
                    <span className="text-gray-500">Amount:</span>
                    <span className="font-bold">{user_info?.currency?.code} {transaction.amount}</span>
                  </div>
                  
                </div>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}