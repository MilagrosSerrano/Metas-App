function ModalForm({children}){
    return(
        <>
        <div className="flex items-center fixed inset-0 bg-gray-700 bg-opacity-75">
            <div className="w-2/3 mx-auto">
               {children}
            </div>
        </div>
        </>
    );
}

export default ModalForm;