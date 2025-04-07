import Readonlyfield from "@/app/components/Readonlyfield"

export default function PersonalInfoForm(){

    return(
        <div className="space-y-4">
             <Readonlyfield label="Full Name" value="Brooklyn Simmons" />
             <Readonlyfield label="Email" value="brooklyn.s@example.com" />
             <Readonlyfield label="Gender" value="Male" />
             <Readonlyfield label="Birthday" value="01 Nov 1990" />

        </div>
    )
}