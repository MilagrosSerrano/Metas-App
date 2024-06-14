function ModalForm({children}){
    return(
        <>
        <div className="flex items-center fixed inset-0 bg-gray-700 bg-opacity-75">
            <div className='mx-auto w-2/3'>
               {children}
            </div>
        </div>
        </>
    );
}

export default ModalForm;