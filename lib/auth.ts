import { cookies } from "next/headers";
import { verifyUserToken, UserTokenData } from "@/utils/jwt";
import { redirect } from "next/navigation";
import { USER_ROLES } from "@/constant/constant";
import { auth } from "@clerk/nextjs/server";

export async function getServerUser(): Promise<UserTokenData | null> {
  try {
    const cookieStore = await cookies();
    const userToken = cookieStore.get("user-token");

    if (!userToken?.value) {
      return null;
    }

    const userData = verifyUserToken(userToken.value);
    return userData;
  } catch (error) {
    console.error("Error getting server user:", error);
    return null;
  }
}

export async function getServerUserDetails(): Promise<UserTokenData | null> {
  const user = await getServerUser();
  return user;
}
export async function getServerUserId(): Promise<string | null> {
  const user = await getServerUser();
  return user?.userId || null;
}

export async function getServerUserRole(): Promise<string | null> {
  const user = await getServerUser();
  return user?.role || null;
}

export async function getServerClerkId(): Promise<string | null> {
  const user = await getServerUser();
  return user?.clerkId || null;
}

export async function getCurrentUser() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/");
  }

  return { userId };
}

export async function getUserRole() {
  const user = await getServerUser();
  
  if (!user) {
    redirect("/sign-out");
  }

  if (!user.role || (user.role !== USER_ROLES.CANDIDATE && user.role !== USER_ROLES.RECRUITER)) {
    redirect("/sign-out");
  }

  return {
    userId: user.userId,
    clerkId: user.clerkId,
    role: user.role,
  };
}

export async function requireRole(requiredRole: USER_ROLES) {
  const { role } = await getUserRole();
  
  if (role !== requiredRole) {
    redirect("/dashboard");
  }
  
  return { role };
} 