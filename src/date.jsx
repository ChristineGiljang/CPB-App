function CurrentDate() {
    const today = new Date();
    const format = {year:'numeric', month: 'long', day: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
    const formattedDate = today.toLocaleDateString(undefined,format);

    return(
        <h1>{formattedDate}</h1>
    );
};
export default CurrentDate