

function TeamSelect() {
    return (
        <div className="mt-4 flex flex-col items-center">
            <div className="w-full">
                <select className="w-full border rounded p-1 text-center">
                    <option value="">Team</option>
                    {/* ดึง API มาแสดงในชื่อทีม*/}
                    <option value="arsenal">Arsenal</option>
                    <option value="man_utd">Manchester United</option>
                    <option value="man_city">Manchester City</option>
                    <option value="chelsea">Chelsea</option>
                </select>
            </div>
        </div>
    )
}

export default TeamSelect