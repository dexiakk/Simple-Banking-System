import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
    const loggedIn = { firstName: "Kacper", lastName: "Test", email: "123@xyz.com" }
    
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "guest"}
                    subtext="Access and manage your account and
                    transaction efficiently."
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.36}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 125.30}, { currentBalance: 50.37}]}
        />
    </section>
  )
}

export default Home